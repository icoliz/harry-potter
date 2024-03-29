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
  const [data, setData] = useState(ls.get('lsData', []));
  const [search, setSearch] = useState(ls.get('lsSearch', ''));
  const [select, setSelect] = useState(ls.get('lsSelect', 'gryffindor'));
  const [checked, setChecked] = useState(ls.get('lsChecked', false));
  const [selectedSpecies, setSelectedSpecies] = useState(
    ls.get('lsSelectedSpecies', 'all')
  );
  const [isLoading, setIsLoading] = useState(false);

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

  const filterData = data
    .filter((char) => {
      return selectedSpecies === 'all'
        ? true
        : char.species === selectedSpecies;
    })
    .filter((char) => {
      return search !== ''
        ? char.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        : true;
    });

  if (checked) {
    filterData.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
  }

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
                search={search}
                select={select}
                isLoading={isLoading}
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
