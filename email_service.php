<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$firstName    = trim($data["firstName"] ?? "");
$lastName     = trim($data["lastName"] ?? "");
$email        = trim($data["email"] ?? "");
$phone        = trim($data["phone"] ?? "");
$organisation = trim($data["organisation"] ?? "");
$enquiryType  = trim($data["enquiryType"] ?? "");
$product      = trim($data["product"] ?? "");
$messageBody  = trim($data["message"] ?? "");

/* Basic validation */

if (
    empty($firstName) ||
    empty($lastName) ||
    empty($email) ||
    empty($enquiryType) ||
    empty($messageBody)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

/* CHANGE THIS TO YOUR EMAIL */

$to = "contact@securemobileindia.com";

/* Sent from your own domain */

$headers  = "From: noreply@securemobileindia.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$subject = "New Website Enquiry - SMI Contact Form";

$mailBody =
"=====================================\n".
"SECURE MOBILE INDIA WEBSITE ENQUIRY\n".
"=====================================\n\n".

"Name:\n".
$firstName . " " . $lastName . "\n\n".

"Email:\n".
$email . "\n\n".

"Phone:\n".
$phone . "\n\n".

"Organisation:\n".
$organisation . "\n\n".

"Enquiry Type:\n".
$enquiryType . "\n\n".

"Product / Vehicle:\n".
$product . "\n\n".

"Message:\n".
$messageBody . "\n";

if (mail($to, $subject, $mailBody, $headers)) {

    echo json_encode([
        "success" => true
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Mail could not be sent."
    ]);

}
?>