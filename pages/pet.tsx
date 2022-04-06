import { NextPage } from "next";
import { useFindPetsByStatusQuery } from "../store/petApi";

const Pet: NextPage = (props) => {
  const { data, error, isLoading } = useFindPetsByStatusQuery({
    status: "available",
  });

  return (
    <div>
      <h1>Petstore</h1>
      <p>
        <a href="https://redux-toolkit.js.org/rtk-query/usage/code-generation">
          see the tutorial
        </a>
      </p>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Pet;
