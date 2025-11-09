const axios = require('axios');

// Skapa en axios-instans med User-Agent header
const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
});

describe('Fake Store API - Integration Tests', () => {
  
  // ============================================
  // G-NIVÅ TESTER
  // ============================================
  
  describe('G-nivå: Grundläggande tester', () => {
    test('GET /products returnerar statuskod 200', async () => {
      const response = await api.get('/products');
      expect(response.status).toBe(200);
    });
  });

  // ============================================
  // VG-NIVÅ TESTER
  // ============================================
  
  describe('VG-nivå: Utökade tester', () => {
    
    // Test 1: Validera antalet produkter
    test('GET /products returnerar förväntat antal produkter (20 st)', async () => {
      const response = await api.get('/products');
      
      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(Array);
      expect(response.data.length).toBe(20);
    });

    // Test 2: Validera att en specifik produkt innehåller korrekta fält
    test('Produkt innehåller korrekta fält: title, price, category', async () => {
      const response = await api.get('/products/1');
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('title');
      expect(response.data).toHaveProperty('price');
      expect(response.data).toHaveProperty('category');
      
      // Validera att fälten har rätt datatyper
      expect(typeof response.data.title).toBe('string');
      expect(typeof response.data.price).toBe('number');
      expect(typeof response.data.category).toBe('string');
      
      // Validera att fälten inte är tomma
      expect(response.data.title.length).toBeGreaterThan(0);
      expect(response.data.price).toBeGreaterThan(0);
      expect(response.data.category.length).toBeGreaterThan(0);
    });

    // Test 3: Validera att ett specifikt produkt-ID returnerar rätt data
    test('GET /products/1 returnerar korrekt produktdata', async () => {
      const response = await api.get('/products/1');
      
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(1);
      expect(response.data.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
      expect(response.data.price).toBe(109.95);
      expect(response.data.category).toBe('men\'s clothing');
    });

    // Test 4: Validera flera produkter har rätt struktur
    test('Alla produkter innehåller obligatoriska fält', async () => {
      const response = await api.get('/products');
      
      expect(response.status).toBe(200);
      
      response.data.forEach(product => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('image');
        expect(product).toHaveProperty('rating');
      });
    });

    // Test 5: Validera rating-strukturen
    test('Produktens rating innehåller rate och count', async () => {
      const response = await api.get('/products/1');
      
      expect(response.status).toBe(200);
      expect(response.data.rating).toHaveProperty('rate');
      expect(response.data.rating).toHaveProperty('count');
      expect(typeof response.data.rating.rate).toBe('number');
      expect(typeof response.data.rating.count).toBe('number');
    });

    // Test 6: Testa felhantering för ogiltigt ID
    test('GET /products/999 returnerar 404 eller tomt objekt', async () => {
      try {
        const response = await api.get('/products/999');
        expect(response.data).toBeNull();
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });

    // Test 7: Validera kategorier
    test('GET /products/categories returnerar giltiga kategorier', async () => {
      const response = await api.get('/products/categories');
      
      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(Array);
      expect(response.data.length).toBeGreaterThan(0);
      
      expect(response.data).toContain('electronics');
      expect(response.data).toContain('jewelery');
    });

    // Test 8: Testa limit-funktionalitet
    test('GET /products?limit=5 returnerar exakt 5 produkter', async () => {
      const response = await api.get('/products?limit=5');
      
      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(Array);
      expect(response.data.length).toBe(5);
    });
  });
});
