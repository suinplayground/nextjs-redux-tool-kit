import { NextPage } from "next";
import { useCreatePostMutation, useGetTeamsQuery } from "../store/esaApi";
import { createRef, FormEvent, useState } from "react";

const Esa: NextPage = (props) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetTeamsQuery({ perPage: 5, page });
  const [createPost, createState] = useCreatePostMutation();
  const teamRef = createRef<HTMLSelectElement>();
  const subjectRef = createRef<HTMLInputElement>();
  const bodyRef = createRef<HTMLTextAreaElement>();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const team = teamRef.current?.value;
    const subject = subjectRef.current?.value;
    const body = bodyRef.current?.value;
    if (confirm(`Are you sure to create a new post in "${team}"?`)) {
      console.log("submit", { team, subject, body });
      createPost({
        teamName: team!,
        createPostBody: { post: { name: subject!, body_md: body! } },
      });
    }
  };

  if (isLoading) {
    return (
      <div
        className="container"
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
        <span aria-busy="true">Loading, please wait…</span>
      </div>
    );
  }

  if (error || !data) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className="container">
      <h1>esa API v1 Demo</h1>

      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.teams.map((team) => (
            <tr key={team.url}>
              <td>
                <img src={team.icon} style={{ width: "1.6em" }} />{" "}
                <a href={team.url}>{team.name}</a>
              </td>
              <td>{team.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <strong>Pagination demo: </strong>
        {data.prev_page ? (
          <a onClick={() => setPage(page - 1)}>« Previous</a>
        ) : (
          "« Previous"
        )}
        {" | "}
        {data.next_page ? (
          <a onClick={() => setPage(page + 1)}>Next »</a>
        ) : (
          "Next »"
        )}
      </div>

      <h2>Create a new post</h2>
      <p>This doesn&#39;t work because of CORS.</p>
      <pre>{JSON.stringify(createState, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <label>Team</label>
        <select ref={teamRef}>
          {data.teams.map((team) => (
            <option key={team.url} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <label>Subject</label>
        <input ref={subjectRef} type="text" required />
        <label>Body</label>
        <textarea ref={bodyRef} placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Esa;
