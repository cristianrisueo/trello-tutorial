/**
 * Component to display user-specific details based on the 'id' parameter.
 *
 * @param {Object} props - React props containing the 'params' object.
 * @param {Object} props.params - Object containing the 'id' property of type string.
 * @param {string} props.params.id - The ID to be displayed.
 * @returns {JSX.Element} - JSX to render the user ID within a <div> element.
 */
export default function UserIdPage({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>;
}
