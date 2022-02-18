  document.querySelector('.articles-category__item1').addEventListener('click', filter1);

  function filter1() {
    document.querySelector('.articles-category__item1').classList.add('articles-category__item--active');
    document.querySelector('.articles-category__item2').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item3').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item4').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item5').classList.remove('articles-category__item--active');
    document.querySelector('.articles-list__item1').classList.remove('ds-none');
    document.querySelector('.articles-list__item2').classList.remove('ds-none');
    document.querySelector('.articles-list__item3').classList.remove('ds-none');
    document.querySelector('.articles-list__item10').classList.add('ds-none');
    document.querySelector('.articles-list__item11').classList.add('ds-none');
    document.querySelector('.articles-list__item12').classList.add('ds-none');
    document.querySelector('.articles-list__item20').classList.add('ds-none');
    document.querySelector('.articles-list__item21').classList.add('ds-none');
    document.querySelector('.articles-list__item22').classList.add('ds-none');
    document.querySelector('.articles-list__item23').classList.add('ds-none');
    document.querySelector('.articles-list__item31').classList.add('ds-none');
    document.querySelector('.articles-list__item32').classList.add('ds-none');
    document.querySelector('.articles-list__item33').classList.add('ds-none');
    document.querySelector('.articles-list__item41').classList.add('ds-none');
    document.querySelector('.articles-list__item42').classList.add('ds-none');
    document.querySelector('.articles-list__item43').classList.add('ds-none');
  }

  document.querySelector('.articles-category__item2').addEventListener('click', filter2);

  function filter2() {
    document.querySelector('.articles-category__item2').classList.add('articles-category__item--active');
    document.querySelector('.articles-category__item1').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item3').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item4').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item5').classList.remove('articles-category__item--active');
    document.querySelector('.articles-list__item1').classList.add('ds-none');
    document.querySelector('.articles-list__item2').classList.add('ds-none');
    document.querySelector('.articles-list__item3').classList.add('ds-none');
    document.querySelector('.articles-list__item10').classList.remove('ds-none');
    document.querySelector('.articles-list__item11').classList.remove('ds-none');
    document.querySelector('.articles-list__item12').classList.remove('ds-none');
    document.querySelector('.articles-list__item20').classList.add('ds-none');
    document.querySelector('.articles-list__item21').classList.add('ds-none');
    document.querySelector('.articles-list__item22').classList.add('ds-none');
    document.querySelector('.articles-list__item23').classList.add('ds-none');
    document.querySelector('.articles-list__item31').classList.add('ds-none');
    document.querySelector('.articles-list__item32').classList.add('ds-none');
    document.querySelector('.articles-list__item33').classList.add('ds-none');
    document.querySelector('.articles-list__item41').classList.add('ds-none');
    document.querySelector('.articles-list__item42').classList.add('ds-none');
    document.querySelector('.articles-list__item43').classList.add('ds-none');
  }

  document.querySelector('.articles-category__item3').addEventListener('click', filter3);

  function filter3() {
    document.querySelector('.articles-category__item2').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item1').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item3').classList.add('articles-category__item--active');
    document.querySelector('.articles-category__item4').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item5').classList.remove('articles-category__item--active');
    document.querySelector('.articles-list__item1').classList.add('ds-none');
    document.querySelector('.articles-list__item2').classList.add('ds-none');
    document.querySelector('.articles-list__item3').classList.add('ds-none');
    document.querySelector('.articles-list__item10').classList.add('ds-none');
    document.querySelector('.articles-list__item11').classList.add('ds-none');
    document.querySelector('.articles-list__item12').classList.add('ds-none');
    document.querySelector('.articles-list__item20').classList.remove('ds-none');
    document.querySelector('.articles-list__item21').classList.remove('ds-none');
    document.querySelector('.articles-list__item22').classList.remove('ds-none');
    document.querySelector('.articles-list__item23').classList.remove('ds-none');
    document.querySelector('.articles-list__item31').classList.add('ds-none');
    document.querySelector('.articles-list__item32').classList.add('ds-none');
    document.querySelector('.articles-list__item33').classList.add('ds-none');
    document.querySelector('.articles-list__item41').classList.add('ds-none');
    document.querySelector('.articles-list__item42').classList.add('ds-none');
    document.querySelector('.articles-list__item43').classList.add('ds-none');
  }

  document.querySelector('.articles-category__item4').addEventListener('click', filter4);

  function filter4() {
    document.querySelector('.articles-category__item2').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item1').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item3').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item4').classList.add('articles-category__item--active');
    document.querySelector('.articles-category__item5').classList.remove('articles-category__item--active');
    document.querySelector('.articles-list__item1').classList.add('ds-none');
    document.querySelector('.articles-list__item2').classList.add('ds-none');
    document.querySelector('.articles-list__item3').classList.add('ds-none');
    document.querySelector('.articles-list__item10').classList.add('ds-none');
    document.querySelector('.articles-list__item11').classList.add('ds-none');
    document.querySelector('.articles-list__item12').classList.add('ds-none');
    document.querySelector('.articles-list__item20').classList.add('ds-none');
    document.querySelector('.articles-list__item21').classList.add('ds-none');
    document.querySelector('.articles-list__item22').classList.add('ds-none');
    document.querySelector('.articles-list__item23').classList.add('ds-none');
    document.querySelector('.articles-list__item31').classList.remove('ds-none');
    document.querySelector('.articles-list__item32').classList.remove('ds-none');
    document.querySelector('.articles-list__item33').classList.remove('ds-none');
    document.querySelector('.articles-list__item41').classList.add('ds-none');
    document.querySelector('.articles-list__item42').classList.add('ds-none');
    document.querySelector('.articles-list__item43').classList.add('ds-none');
  }

  document.querySelector('.articles-category__item5').addEventListener('click', filter5);

  function filter5() {
    document.querySelector('.articles-category__item2').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item1').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item3').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item4').classList.remove('articles-category__item--active');
    document.querySelector('.articles-category__item5').classList.add('articles-category__item--active');
    document.querySelector('.articles-list__item1').classList.add('ds-none');
    document.querySelector('.articles-list__item2').classList.add('ds-none');
    document.querySelector('.articles-list__item3').classList.add('ds-none');
    document.querySelector('.articles-list__item10').classList.add('ds-none');
    document.querySelector('.articles-list__item11').classList.add('ds-none');
    document.querySelector('.articles-list__item12').classList.add('ds-none');
    document.querySelector('.articles-list__item20').classList.add('ds-none');
    document.querySelector('.articles-list__item21').classList.add('ds-none');
    document.querySelector('.articles-list__item22').classList.add('ds-none');
    document.querySelector('.articles-list__item23').classList.add('ds-none');
    document.querySelector('.articles-list__item31').classList.add('ds-none');
    document.querySelector('.articles-list__item32').classList.add('ds-none');
    document.querySelector('.articles-list__item33').classList.add('ds-none');
    document.querySelector('.articles-list__item41').classList.remove('ds-none');
    document.querySelector('.articles-list__item42').classList.remove('ds-none');
    document.querySelector('.articles-list__item43').classList.remove('ds-none');
  }