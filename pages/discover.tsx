import React, { useState } from 'react';

const apiUrl = 'https://flask-milk-crate.vercel.app/process'
//const apiUrl = 'http://localhost:5000/process'


interface Track {
  id: {
    [key: string]: string;
  };
  track_name: {
    [key: string]: string;
  };
  artist: {
    [key: string]: string;
  };
  album: {
    [key: string]: string;
  };
}

export default function Discover() {

  const [formData, setFormData] = useState({
    input: ''
  })
  const [data, setData] = useState<Track | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const send = new FormData(event.target);

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: send
    });

    const json = await response.json();
    setData(json);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div>
      <form className="p-5" onSubmit={handleSubmit}>
        <input type="text" name="input" onChange={handleChange} className="border-black border-2 rounded-md mr-5 p-3" />
        <input type="submit" value="Submit" className='border-black border-2 rounded-md p-3 cursor-pointer' />
      </form>

      <div className="p-5">
        <ul>
          {data && Object.keys(data.track_name).map((key: string) => (
            <li key={key}>{data.track_name[key]}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}