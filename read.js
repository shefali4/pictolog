#root {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card {
    margin: 1rem;
    border: 1px solid gray;
  }
  
  @media screen and (min-width: 600px) {
    .card {
      flex: 1 1 calc(50% - 2rem);
    }
  }
  
  @media screen and (min-width: 900px) {
    .card {
      flex: 1 1 calc(33% - 2rem);
    }
  }

<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <title>Ghibli App</title>
  
      <link
        href="https://fonts.googleapis.com/css?family=Dosis:400,700"
        rel="stylesheet"
      />
      <link href="style.css" rel="stylesheet" />
    </head>
  
    <body>
      <div id="root"></div>
      <script src="scripts.js"></script>
    </body>
  </html>