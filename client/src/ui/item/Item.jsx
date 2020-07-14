import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Container from '../container/Container'
import CustomButton from '../customButton/Button'
import CustomIconButton from '../iconButton/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

const Item = ({img, title, description, createdDate, id}) => {
  const history = useHistory()
  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => setReadMore(!readMore)

  return (
    <Container elevation={3}>
      <div>
        <img src={img} alt="cake"/>
        <p>
          {createdDate.toLocaleString("ua-UA")}
        </p>
      </div>
      <div>
        <h2>
          {title}
          <CustomIconButton
            title='Редагувати рецепт'
            size='small'
            click={() => history.push(`/edit-recipe:${id}`)}
          >
            <EditOutlinedIcon fontSize='inherit'/>
          </CustomIconButton>
        </h2>
        {
          description.length > 300 && !readMore
            ? <p>
              {description.slice(0, 300)}
              <CustomButton text='Читати більше' click={handleReadMore}/>
            </p>
            : description.length > 300
            ? <p>
              {description}
              <CustomButton text='Згорнути' click={handleReadMore}/>
            </p>
            : <p>{description}</p>
        }
      </div>
    </Container>
  )
}

export default Item