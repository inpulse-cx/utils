async function POST(
  url: string,
  { arg }: { arg: any },
) {
  return (
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(arg)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      // Handle the error.
    })
  );
}

export default POST;
