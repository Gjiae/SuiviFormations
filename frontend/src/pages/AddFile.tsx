import { Layout } from '@/ui/components/layout/layout'
import React, {useState} from 'react';
import axios from 'axios';

function AddFile() {
  const [file, setFile] = useState(null)

  const getFileInfo = (e) => {
    //NOTE THE ADDITION OF 'e' PARAMETER
    console.log('File info working!')
    console.log(e.target.files[0]);
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setFile(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/api/uploadFile', file)
      .then((res) => {
        console.log('Axios res : ', res);
      })
      .catch((error) => {
        console.error("Error uploading file : ", error);
      });
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={getFileInfo} />
        <button type="submit">Upload</button>
      </form>
    </Layout>
  );
}

export default AddFile;