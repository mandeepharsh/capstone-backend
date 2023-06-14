// Migration for creating the JobNumber table

exports.up = function(knex) {
    return knex.schema.createTable('WorkOrder', function(table) {
      table.increments('work_order_id').primary();
      table.string('workoder_Number').notNullable();
      table.string('project_name').notNullable();
      table.string('client_name').notNullable();
      table.string('details');
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('JobNumber');
  };
  