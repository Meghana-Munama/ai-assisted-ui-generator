export const componentMapper = {
  card: 'GeneratedCard',
  button: 'GeneratedButton',
  layout: 'DashboardLayout'
};

export const mapRequirementToComponent = (requirementType) => {
  return componentMapper[requirementType] || 'GeneratedCard';
};
