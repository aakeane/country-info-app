class FetchRequest {
  async getCity(city) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${city}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }
}
