import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/post/create" />
      <Route path="/" />
    </Switch>
  );
}
