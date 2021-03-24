import React, {useEffect} from 'react'
import Styles from './CommonButton.module.scss'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
)

type PropsType = {
  buttonName: string
}

const shazamAPI = () => fetch("https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "9f24bbc846msh784bdc8aac0fae0p1615c9jsne2997e4472ae",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
const CommonButton: React.FC<PropsType> = ({buttonName}) => {
  useEffect(() => {
    shazamAPI()
    console.log('use effect')
  }, [])
  const classes = useStyles()
  return (
    <div className={Styles.wrap}>
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button className={Styles.uploadBtn} variant="contained" component="span">
            {buttonName}
          </Button>
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
      </div>
    </div>
  )
}
export default CommonButton
