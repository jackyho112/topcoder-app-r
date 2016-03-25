import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemberSearchView from '../components/MemberSearch/MemberSearchView'
import loadMemberSearch from '../actions/loadMemberSearch'
import { isEndOfScreen } from '../helpers'

class MemberSearch extends Component {
  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)

    this.searchTermFromQuery = this.props.location.query.q
    this.props.loadMemberSearch(this.searchTermFromQuery)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { moreMatchesAvailable, usernameMatches, loading } = this.props

    if (!loading && moreMatchesAvailable && usernameMatches.length > 10) {
      isEndOfScreen(this.props.loadMemberSearch, this.searchTermFromQuery)
    }
  }

  render() {
    return React.createElement(MemberSearchView, this.props)
  }
}

const mapStateToProps = ({ memberSearch, searchTerm }) => {
  return {
    loading: memberSearch.loading,
    error  : memberSearch.error,

    usernameMatches     : memberSearch.usernameMatches,
    moreMatchesAvailable: memberSearch.moreMatchesAvailable,
    totalCount          : memberSearch.totalCount,
    topMembers          : memberSearch.topMembers,

    previousSearchTerm: searchTerm.previousSearchTerm,
    searchTermTag     : searchTerm.searchTermTag
  }
}

const actionsToBind = { loadMemberSearch }

export default connect(mapStateToProps, actionsToBind)(MemberSearch)
