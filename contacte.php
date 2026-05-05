<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>ROSELLE | Contact</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="nav">
  <div class="container navbar">
    <a class="brand" href="index.php">ROSELLE</a>
    <div class="menu">
      <a href="index.php">Acasă</a>
      <a href="despre.php">Despre</a>
      <a href="produse.php">Produse</a>
      <a href="galerie.php">Galerie</a>
      <a class="active" href="contacte.php">Contacte</a>
    </div>
  </div>
</div>

<main class="container page">
  <h1>Contactează-ne</h1>
  <p class="lead">Completează formularul și îți vom răspunde cât mai curând.</p>

  <div class="contact-card">

    <form method="POST">
      <p>
        <input type="text" name="nume" placeholder="Numele tău" required>
      </p>

      <p>
        <input type="email" name="email" placeholder="Email" required>
      </p>

      <p>
        <textarea name="mesaj" placeholder="Mesajul tău" required></textarea>
      </p>

      <button type="submit" class="btn">Trimite mesajul</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nume = htmlspecialchars($_POST["nume"]);
      $email = htmlspecialchars($_POST["email"]);
      $mesaj = htmlspecialchars($_POST["mesaj"]);

      echo "<p style='margin-top:20px; color:#b76f8b; font-weight:bold;'>
              Mulțumim, $nume! Mesajul tău a fost primit.
            </p>";
    }
    ?>

  </div>
</main>

<footer>© 2026 ROSELLE | Beauty inspired by nature</footer>

</body>
</html>
