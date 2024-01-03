<?php

$pdo = new PDO('mysql:host=localhost;dbname=studioYoga;port=3306;charset=utf8', 'seu_usuario', 'sua_senha');

// Consulta para obter a quantidade total de aulas por mês
$sqlTotalAulasPorMes = "
    SELECT MONTH(Data_Aula) AS Mes, COUNT(*) AS TotalAulas
    FROM aula
    GROUP BY Mes
";

$statementTotalAulasPorMes = $pdo->prepare($sqlTotalAulasPorMes);
$statementTotalAulasPorMes->execute();

$totalAulasPorMes = [];
while ($row = $statementTotalAulasPorMes->fetch(PDO::FETCH_ASSOC)) {
    $totalAulasPorMes[$row['Mes']] = $row['TotalAulas'];
}

// Consulta para obter a porcentagem de presença por mês
$sqlPresencaPorMes = "
    SELECT MONTH(Data_Presenca) AS Mes, COUNT(*) AS TotalPresencas
    FROM presenca
    WHERE Presente = true
    GROUP BY Mes
";

$statementPresencaPorMes = $pdo->prepare($sqlPresencaPorMes);
$statementPresencaPorMes->execute();

$presencaPorMes = [];
while ($row = $statementPresencaPorMes->fetch(PDO::FETCH_ASSOC)) {
    $presencaPorMes[$row['Mes']] = $row['TotalPresencas'];
}

// Calcular a porcentagem de presença por mês
$porcentagemPorMes = [];
foreach ($totalAulasPorMes as $mes => $totalAulas) {
    $presencas = isset($presencaPorMes[$mes]) ? $presencaPorMes[$mes] : 0;
    $porcentagem = ($presencas / $totalAulas) * 100;
    $porcentagemPorMes[$mes] = round($porcentagem, 2);
}

// Formatar os resultados para saída JSON
$resultadoFinal = [];
foreach ($porcentagemPorMes as $mes => $porcentagem) {
    $resultadoFinal[] = ['Mes' => $mes, 'Porcentagem' => $porcentagem];
}

echo json_encode($resultadoFinal);
