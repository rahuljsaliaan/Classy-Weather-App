export function Input({ location, onChangeLocation }) {
  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={onChangeLocation}
        placeholder="Enter location...!"
      />
    </div>
  );
}
