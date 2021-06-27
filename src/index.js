export default function destructur(object) {
  const {
    id: objectId,
    name: objectName,
    icon: objectIcon,
    description: objectDescription = 'Описание недоступно',
  } = object;
  return {
    id: objectId,
    name: objectName,
    icon: objectIcon,
    description: objectDescription,
  };
}
