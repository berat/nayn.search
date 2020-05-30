import React, { useState, useRef } from "react";

import "../css/App.css";
import Search from "../search.svg";

function App() {
  const [isValue, setValue] = useState(
    '-site:trthaber.com -site:memurlar.net -site:yeniasir.com.tr -site:t24.com.tr -site:haber7.com -site:sondakika.com -site:yenisafak.com -site:posta.com.tr -site:milligazete.com.tr -site:birgun.net -site:yeniakit.com.tr -site:internethaber.com -site:ensonhaber.com -site:mynet.com -site:star.com.tr -site:takvim.com.tr -site:gazeteduvar.com.tr -site:haberturk.com -site:sozcu.com.tr -site:haberler.com -site:odatv.com -site:hurriyet.com.tr -site:milliyet.com.tr -site:sabah.com.tr -site:cumhuriyet.com.tr -site:cnnturk.com"'
  );
  const searchText = useRef();

  const changeSearch = () => {
    setValue(
      `${searchText.current.value} -site:trthaber.com -site:memurlar.net -site:yeniasir.com.tr -site:t24.com.tr -site:haber7.com -site:sondakika.com -site:yenisafak.com -site:posta.com.tr -site:milligazete.com.tr -site:birgun.net -site:yeniakit.com.tr -site:internethaber.com -site:ensonhaber.com -site:mynet.com -site:star.com.tr -site:takvim.com.tr -site:gazeteduvar.com.tr -site:haberturk.com -site:sozcu.com.tr -site:haberler.com -site:odatv.com -site:hurriyet.com.tr -site:milliyet.com.tr -site:sabah.com.tr -site:cumhuriyet.com.tr -site:cnnturk.com"`
    );
  };
  return (
    <div className="App">
      <h2>
        Rahatça Ara <del>haber siteleri</del>
      </h2>
      <form method="get" action="https://www.google.com/search" target="_blank">
        <input name="q" id="q" value={isValue} type="hidden" />
        <input
          ref={searchText}
          type="text"
          autoComplete="off"
          placeholder="Aradığını bul"
          onChange={changeSearch}
        />
        <button type="submit">
          <img src={Search} />
        </button>
      </form>
      <p>Haber Sitelerinin çöplüğünden yılmışlar için arama motoru.</p>
    </div>
  );
}

export default App;
