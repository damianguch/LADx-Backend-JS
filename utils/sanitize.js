const { escape, isNumeric } = require('validator');

const sanitizeInput = (input) => {
  return {
    fullname: escape(input.fullname),
    email: escape(input.email),
    country: escape(input.country),
    state: escape(input.state),
    phone: input.phone && isNumeric(input.phone) ? escape(input.phone) : null,
    password: escape(input.password),
    confirm_password: escape(input.confirm_password)
  };
};

const sanitizeProfileInput = (input) => {
  return {
    fullname: escape(input.fullname),
    country: escape(input.country),
    state: escape(input.state)
  };
};

const sanitizeTravelDetailsInput = (input) => {
  return {
    flight_number: escape(input.flight_number),
    departure_city: escape(input.departure_city),
    destination_city: escape(input.destination_city),
    departure_date: new Date(input.departure_date),
    destination_date: new Date(input.destination_date),
    arrival_time: escape(input.arrival_time),
    boarding_time: escape(input.boarding_time),
    airline_name: escape(input.airline_name),
    item_weight: input.item_weight,
    userId
  };
};

module.exports = {
  sanitizeInput,
  sanitizeProfileInput,
  sanitizeTravelDetailsInput
};
