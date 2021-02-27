import React, {useEffect} from "react"
import News from "./News"
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getNews} from "../../Redux/newsReducer";
import {getBodySelector, getTitleSelector } from "../../Redux/selectors";

type PropsType = {
  title: string
  body: string

  getNews: (q: string,
            pageNumber: number,
            pageSize: number,
            autoCorrect: boolean) => void
}

const NewsContainer: React.FC<PropsType> = (props) => {
  useEffect(() => {
    let q = 'taylor swift'
    let pageNumber = 1
    let pageSize = 10
    let autoCorrect = true
    props.getNews(q, pageNumber, pageSize, autoCorrect)
  }, [])

  return <News title={props.title} body={props.body}/>
}

const mapStateToProps = (state: AppStateType) => ({
  title: getTitleSelector(state),
  body: getBodySelector(state)
})


export default connect(mapStateToProps, {getNews})(NewsContainer)