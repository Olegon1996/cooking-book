import React, {useState} from 'react'
import {useStyles} from './style'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const UploadFile = ({handleFile, file, name}) => {

  const [insideArea, setInsideArea] = useState(false)
  const classes = useStyles();

  const handleDrop = (e, bool) => {
    e.preventDefault()
    e.stopPropagation()
    setInsideArea(bool)
  }

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
        name={name}
        onChange={e => handleFile(e.target.files?.[0], name)}
      />
      <label htmlFor='contained-button-file'>
        <div
          onDragEnter={e => handleDrop(e, false)}
          onDragOver={e => handleDrop(e, true)}
          onDragLeave={e => handleDrop(e, false)}
          onDrop={e => {
            handleDrop(e, false)
            const file = e.dataTransfer.files[0]
            handleFile(file, name)
          }}
          style={
            insideArea
              ? {background: 'rgb(207, 207, 207)'}
              : {background: '#EDEDED'}
          }
        >
          <div>
            <PublishOutlinedIcon/>
            {file?.name ? file.name : 'Фото смаколика'}
          </div>
        </div>
      </label>
    </div>
  )
}

export default UploadFile
