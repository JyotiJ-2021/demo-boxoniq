import parse from "html-react-parser";
import Header from "../../components/Header";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

export default function Search({ rows }) {
  const data = rows.product;
  const router = useRouter();
  console.group(router);

  return (
    <div>
      <Header name="Search" />
      <div className="content">
        <h4>Search Page</h4>
        <p>Search your favaroute products from here.</p>
      </div>
      <div className="row">
        {/* {data.length > 0
          ? data.map((item, i) => {
              return (
                <div className="col-6" key={i}>
                  <div className="card">
                    <div>
                      <img src={item.image} />
                    </div>
                    <div>
                      <div className="content">{item.title}</div>
                      {parse(item.desc)}
                    </div>
                  </div>
                </div>
              );
            })
          : null} */}
        <Grid container spacing={2}>
          {data.map((item, i) => {
            return (
              <Grid item xs={6} key={i}>
                <Paper>
                  <Grid item xs={12} style={{ display: "flex" }}>
                    <Grid item xs={4} className="data-img">
                      <img src={item.image} />
                    </Grid>
                    <Grid item xs={8} className="data-content">
                      <div className="">{item.title}</div>
                      {parse(item.desc)}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const rows = await fetch(
    "https://cms.boxoniq.com/api/droid/search-super-cat-web-bo.php"
  ).then((res) => res.json());
  return {
    props: { rows },
  };
};
