import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';
import title from '../images/hp-title.png';
import '../styles/App.scss';
import NotFound from './NotFound';

function App() {
  // Declare state variables
  const [data, setData] = useState(ls.get('lsData', []));
  const [search, setSearch] = useState(ls.get('lsSearch', ''));
  const [select, setSelect] = useState(ls.get('lsSelect', 'gryffindor'));
  const [checked, setChecked] = useState(ls.get('lsChecked', false));
  const [selectedSpecies, setSelectedSpecies] = useState(
    ls.get('lsSelectedSpecies', 'all')
  );
  const [isLoading, setIsLoading] = useState(false);

  // Call to Api and localStorage
  useEffect(() => {
    setIsLoading(true);
    callToApi(select).then((cleanData) => {
      setData(cleanData);
      setIsLoading(false);
    });
  }, [select]);

  useEffect(() => {
    ls.set('lsData', data);
    ls.set('lsSearch', search);
    ls.set('lsSelect', select);
    ls.set('lsChecked', checked);
    ls.set('lsSelectedSpecies', selectedSpecies);
  }, [data, search, select, checked, selectedSpecies]);

  // Handlers
  const handleChange = (data) => {
    if (data.key === 'search') {
      setSearch(data.value);
    } else if (data.key === 'select') {
      setSelect(data.value);
    } else if (data.key === 'checked') {
      setChecked(data.value);
    } else if (data.key === 'species') {
      setSelectedSpecies(data.value);
    }
  };

  const handleReset = () => {
    setSearch('');
    setSelect('gryffindor');
    setChecked(false);
    setSelectedSpecies('all');
  };

  // Filters
  const filterData = data
    .filter((char) => {
      if (selectedSpecies === 'all') {
        return true;
      } else {
        return char.species === selectedSpecies;
      }
    })
    .filter((char) => {
      if (search !== '') {
        return char.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      } else {
        return true;
      }
    });

  if (checked) {
    filterData.sort((a, b) => {
      // With < we are sorting "a" before "b"
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        // -1 places our element first, else it will place after it
        return -1;
      } else {
        return 1;
      }
    });
  }

  // If there are no results matching the search
  const noResults = (search) => {
    if (filterData.length === 0) {
      return (
        <p className="error-msg">
          No hay ning??n personaje con el nombre "{search}", prueba a modificar
          los filtros de la b??squeda.
        </p>
      );
    }
  };

  // Router
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = data.find((char) => char.id === routeId);
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <Loader loading={isLoading} />
      <Route path="/">
        <header className="header">
          <h1 className="header__title">Harry Potter</h1>
          <img className="header__img" src={title} alt="Harry Potter logo" />
        </header>
      </Route>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <section className="main__filter">
              <Filter
                selectedSpecies={selectedSpecies}
                search={search}
                select={select}
                checked={checked}
                handleChange={handleChange}
                handleReset={handleReset}
              />
            </section>
            <section className="main__characters">
              <CharacterList
                filterData={filterData}
                noResults={noResults(search)}
              />
            </section>
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <small className="footer__copy">&copy; 2022 Ico Lizhen </small>
      </footer>
    </>
  );
}

export default App;
