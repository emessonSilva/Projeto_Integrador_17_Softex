<?php
$servername = "localhost";
$username = "root";
$password = "Eme#8710";
$dbname = "studioYoga";

// Criar uma conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta SQL
$sql = "
    SELECT
        aula.AulaID,
        aula.Nome_Aula,
        COUNT(presenca.PresencaID) as Numero_Presencas
    FROM
        aula
    LEFT JOIN
        presenca ON aula.AulaID = presenca.AulaID
    GROUP BY
        aula.AulaID, aula.Nome_Aula;
";

$result = $conn->query($sql);

// Verificar se há resultados
if ($result->num_rows > 0) {
    // Construir um array associativo com os resultados
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            'Nome_Aula' => $row['Nome_Aula'],
            'Numero_Presencas' => (int)$row['Numero_Presencas'],
        );
    }

    // Retornar os dados como JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "Não há resultados.";
}

// Fechar a conexão
$conn->close();
?>
