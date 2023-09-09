const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::users-course.users-course', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    console.log(id)
    // Construct the query to find a record based on user_id
    const entity = await strapi.db.query('api::users-course.users-course').findOne({
      where: {user_id: id} // Assuming your model has a field named 'user_id'
    });

    // Check if the entity was found
    if (!entity) {
      return ctx.notFound('Entity not found');
    }

    // Sanitize and transform the entity before returning it
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  }
}));
