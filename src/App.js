import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class=" header navbar navbar-dark bg-dark">
          <div class="container">
            <div class="row m-auto">
              <i class="fa fa-hand-pointer-o fa-4x text-white" />
              <div class="h1 ml-2 my-auto text-light" href="/">
                Botón on/off
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div class="container">
            <div class="d-flex flex-row">
              <div class="col-md-4 mx-auto">
                <div class="panel">
                  <button
                    onclick="toggle()"
                    type="button"
                    class="btn btn-primary"
                  >
                    Ocultar fecha
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
