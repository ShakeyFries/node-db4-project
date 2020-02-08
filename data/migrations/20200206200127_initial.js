
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipe', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
    }))
    .createTable('ingredient', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
      tbl.integer('measurement_num').notNullable();
      tbl.string('measurement_name', 128).notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step_number').notNullable();
      tbl.string('instruction').notNullable();
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipe.id')
        .onDelete('CASACDE')
        ontimeupdate('CASCADE');
    })
    .createTable('recipe_ingredient', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('ingredient.is');
    });
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableifExists('recipe_ingredient')
    .dropTableifExists('instructions')
    .dropTableifExists('ingredient')
    .dropTableifExists('recipe')
  );
};
