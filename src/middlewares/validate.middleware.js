export function validateQuery(schema) {
  return (req, _res, next) => {
    const parsed = schema.safeParse(req.query);
    if (!parsed.success) return next({ status: 400, message: "Invalid query", details: parsed.error.issues });
    req.query = parsed.data;
    next();
  };
}
