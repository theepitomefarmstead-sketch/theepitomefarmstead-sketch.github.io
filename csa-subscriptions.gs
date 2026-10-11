function doPost(event) {
  try {
    const request = validateRequest(event.parameter);
    const interval = request.frequency + " " + request.frequencyUnit;
    const body = [
      "A new CSA subscription request was submitted.",
      "",
      "Name: " + request.name,
      "Email: " + request.email,
      "Phone: " + request.phone,
      "Product: " + request.product,
      "Quantity per delivery: " + request.quantity,
      "Requested delivery interval: every " + interval,
      "Preferred start date: " + (request.startDate || "Not specified"),
      "Delivery area or pickup preference: " + request.deliveryArea,
      "Delivery coordinates: " + (request.deliveryCoordinates || "Address selected"),
      "Additional notes: " + (request.notes || "None"),
      "",
      "This is a request only. Please contact the subscriber to confirm availability and delivery details."
    ].join("\n");

    MailApp.sendEmail({
      to: "theepitomefarmstead@gmail.com",
      subject: "New CSA subscription request: " + request.product,
      body,
      replyTo: request.email,
      name: "The Epitome CSA"
    });

    return confirmationPage(true);
  } catch (error) {
    console.error("CSA subscription request failed: " + error.message);
    return confirmationPage(false);
  }
}

function validateRequest(parameters) {
  if (!parameters || parameters.website) {
    throw new Error("Invalid request.");
  }

  const request = {
    name: requiredText(parameters.name, 100),
    email: requiredText(parameters.email, 254).toLowerCase(),
    phone: requiredText(parameters.phone, 30),
    product: requiredText(parameters.product, 100),
    quantity: Number(parameters.quantity),
    frequency: Number(parameters.frequency),
    frequencyUnit: requiredText(parameters.frequencyUnit, 10),
    startDate: String(parameters.startDate || ""),
    deliveryArea: requiredText(parameters.deliveryArea, 250),
    deliveryCoordinates: String(parameters.deliveryCoordinates || "").trim(),
    notes: String(parameters.notes || "").trim()
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email)) {
    throw new Error("Invalid email address.");
  }
  if (!["Seasonal vegetables", "Free-range chicken", "Value-added farm products", "Mixed farm products"].includes(request.product)) {
    throw new Error("Invalid product selection.");
  }
  if (!Number.isInteger(request.quantity) || request.quantity < 1 || request.quantity > 99) {
    throw new Error("Invalid delivery quantity.");
  }
  if (!Number.isInteger(request.frequency) || request.frequency < 1 || request.frequency > 365) {
    throw new Error("Invalid delivery interval.");
  }
  if (!["days", "weeks", "months"].includes(request.frequencyUnit)) {
    throw new Error("Invalid delivery interval unit.");
  }
  const maximumFrequency = request.frequencyUnit === "days" ? 365 : request.frequencyUnit === "weeks" ? 52 : 12;
  if (request.frequency > maximumFrequency) {
    throw new Error("Delivery interval is too large for the selected unit.");
  }
  if (request.notes.length > 1000) {
    throw new Error("Notes are too long.");
  }
  if (request.startDate && !/^\d{4}-\d{2}-\d{2}$/.test(request.startDate)) {
    throw new Error("Invalid preferred start date.");
  }
  if (request.deliveryCoordinates) {
    const coordinates = request.deliveryCoordinates.split(",").map(Number);
    if (
      request.deliveryCoordinates.length > 50 ||
      coordinates.length !== 2 ||
      !coordinates.every(Number.isFinite) ||
      coordinates[0] < -90 ||
      coordinates[0] > 90 ||
      coordinates[1] < -180 ||
      coordinates[1] > 180
    ) {
      throw new Error("Invalid delivery coordinates.");
    }
  }
  if (!parameters.contactConsent) {
    throw new Error("Contact consent is required.");
  }

  return request;
}

function requiredText(value, maxLength) {
  const text = String(value || "").trim();
  if (!text || text.length > maxLength) {
    throw new Error("A required field is missing or too long.");
  }
  return text;
}

function confirmationPage(sent) {
  const title = sent ? "Request sent" : "Request not sent";
  const message = sent
    ? "Your CSA request has been emailed to the farm. The team will contact you to confirm product availability and delivery details."
    : "We could not email your CSA request. Please return to the form and try again later.";
  const background = sent ? "#e8eddf" : "#f4e7e0";
  const color = sent ? "#183d32" : "#7a3f2c";

  return HtmlService.createHtmlOutput(
    "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
    "<title>" + title + " | The Epitome Farm</title>" +
    "<style>body{margin:0;padding:32px;background:#f5f2e9;color:#242820;font:16px/1.6 Arial,sans-serif}" +
    "main{max-width:600px;margin:10vh auto;padding:36px;border-radius:18px;background:#fffdf7}" +
    "h1{color:" + color + "}p{padding:16px;border-radius:8px;background:" + background + "}" +
    "</style></head><body><main><h1>" + title + "</h1><p>" + message + "</p>" +
    "<p>You can close this tab to return to The Epitome Farm.</p></main></body></html>"
  );
}
