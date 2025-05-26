import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ujjwal-2504")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center text-6xl">Github</h1>
      <div className="flex text-center m-4 bg-amber-950 text-white text-2xl p-5 gap-5 justify-around">
        <img src={data.avatar_url} alt="Git picture" width={300} />
        <div className="">
          <p>Username: {data.name}</p>
          <p>Username: {data.login}</p>
          <p>Followers:{data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Following: {data.public_repos}</p>
          <p>
            <a target="_blank" className="text-blue-400" href={data.html_url}>
              Visit
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Github;
