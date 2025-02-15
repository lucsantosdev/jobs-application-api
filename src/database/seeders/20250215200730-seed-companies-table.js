// src/database/seeders/XXXXXXXXXXXXXX-seed-companies-table.js

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{
      name: 'Apple Inc.',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.apple.com/',
      email: 'email@appe.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Porsche',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.porsche.com/usa/',
      email: 'email@porsche.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Piaget',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.piaget.com/us-en',
      email: 'email@piaget.com',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};