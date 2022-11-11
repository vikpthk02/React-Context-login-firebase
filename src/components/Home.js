import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {

  const Access_Key = 'R1V2oOYTU3GoladfRiEeIAd5qOVVJXI1xSKCbkKWCcQ';
  const [randomResults, setRandomResults] = useState([]);

  const fetchRendomData = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${Access_Key}&per_page=50&query=trending&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        setRandomResults(data.results)
      });
  }

  useEffect(() => {
    fetchRendomData();
  })


  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="header">
        <h1>HIGH DEFINATION STOCK PICTURES</h1>
      </div>
      <div className="header-comp">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus beatae, eos natus quae tempora dolore voluptatem facilis enim quidem aut nesciunt quas vitae mollitia quisquam cupiditate nihil consectetur deleniti ullam?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore autem nam maxime ad placeat doloremque quis mollitia! Beatae eum at quas vel aperiam tempora eos hic aut sit voluptatum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus beatae, eos natus quae tempora dolore voluptatem facilis enim quidem aut nesciunt quas vitae mollitia quisquam cupiditate nihil consectetur deleniti ullam?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore autem nam maxime ad placeat doloremque quis mollitia! Beatae eum at quas vel aperiam tempora eos hic aut sit voluptatum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi autem rem quibusdam enim blanditiis expedita, cumque id placeat doloremque, atque assumenda odio doloribus fuga adipisci, facilis dolore eaque repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi autem rem quibusdam enim blanditiis expedita, cumque id placeat doloremque, atque assumenda odio doloribus fuga adipisci, facilis dolore eaque repellendus!
        </p>
      </div>
      <div className="home-page">
        <div className="lists">
          {
            randomResults.map((users) => {

              return <img className="item" key={users.id} src={users.urls.regular} subtitle={<span>by: Author</span>} />
            })
          }
        </div>
      </div>
      <br />
      <div className="loading-bar"><h4>Loading...</h4></div>
      <br />


      <div className="header-comp">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus beatae, eos natus quae tempora dolore voluptatem facilis enim quidem aut nesciunt quas vitae mollitia quisquam cupiditate nihil consectetur deleniti ullam?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore autem nam maxime ad placeat doloremque quis mollitia! Beatae eum at quas vel aperiam tempora eos hic aut sit voluptatum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus beatae, eos natus quae tempora dolore voluptatem facilis enim quidem aut nesciunt quas vitae mollitia quisquam cupiditate nihil consectetur deleniti ullam?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore autem nam maxime ad placeat doloremque quis mollitia! Beatae eum at quas vel aperiam tempora eos hic aut sit voluptatum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi autem rem quibusdam enim blanditiis expedita, cumque id placeat doloremque, atque assumenda odio doloribus fuga adipisci, facilis dolore eaque repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi autem rem quibusdam enim blanditiis expedita, cumque id placeat doloremque, atque assumenda odio doloribus fuga adipisci, facilis dolore eaque repellendus!
        </p>
      </div>

      <div>
        <div className="p-4 box mt-3 text-center">
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
