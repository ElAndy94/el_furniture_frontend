import React from 'react';

const Home = () => {
  const postApi = 'https://jsonplaceholder.typicode.com/comments';

  const delayES8 = async postApi => {
    const response = await fetch(postApi);
    const json = await response.json();
    const name = await fetch(`${postApi}?name=${json[0].name}`);
    const json2 = await name.json();
    return json2;
  };

  delayES8(postApi)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err));

  return (
    <section>
      <div className='wrapper'>
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default Home;
