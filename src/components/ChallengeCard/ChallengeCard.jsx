import React, { PropTypes } from 'react'
import MyChallengeIndicator from './MyChallengeIndicator/MyChallengeIndicator'
import ChallengeInfo from './ChallengeInfo/ChallengeInfo'
import ChallengeInfoSecondary from './ChallengeInfoSecondary/ChallengeInfoSecondary'
import ChallengeMetaData from './ChallengeMetaData/ChallengeMetaData'
import { isUserRegistered } from '../../helpers'

require('./ChallengeCard.scss')

const ChallengeCard = ({ challenge }) => {
  const myChallenge = isUserRegistered(challenge.users)

  return (
    <div className="challenge-card">
      <MyChallengeIndicator myChallenge={myChallenge} />

      <ChallengeInfo challenge={challenge} />

      <ChallengeInfoSecondary challenge={challenge} />

      <ChallengeMetaData challenge={challenge} myChallenge={myChallenge} />
    </div>
  )
}

ChallengeCard.propTypes = {
  challenge: PropTypes.object.isRequired
}

export default ChallengeCard
