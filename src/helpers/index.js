import _ from 'lodash'

// Fetch helpers
export function status(response) {
  if (response.status >= 200 && response.status < 400) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export function json(response) {
  return response.json()
}

// Member Levels
export function memberLevelByRating(userRating) {
  const levelRatings = [0, 900, 1200, 1500, 2200]

  const userLevel = _.findLastIndex(levelRatings, (rating) => {
    if (userRating >= rating) {
      return true
    }
    return false
  })

  return userLevel + 1
}

export function memberColorByLevel(userLevel) {
  const colorsByLevel = {
    1: '#9D9FA0',
    2: '#69C329',
    3: '#616BD5',
    4: '#FCD617',
    5: '#EF3A3A'
  }

  const color = colorsByLevel[userLevel] || colorsByLevel[1]

  return color
}

// Subtrack Abbreviations
export function getSubtrackAbbreviation(subtrack) {
  const subtrackAbbreviations = {
    APPLICATION_FRONT_END_DESIGN  : 'A',
    ARCHITECTURE                  : 'A',
    ASSEMBLY_COMPETITION          : 'AC',
    BANNERS_OR_ICONS              : 'BI',
    BUG_HUNT                      : 'BH',
    CODE                          : 'C',
    CONCEPTUALIZATION             : 'C',
    CONTENT_CREATION              : 'CC',
    COPILOT_POSTING               : 'CP',
    DESIGN_FIRST_2_FINISH         : 'DF2F',
    FIRST_2_FINISH                : 'FF',
    IDEA_GENERATION               : 'IG',
    MARATHON_MATCH                : 'MM',
    OTHER                         : 'O',
    PRINT_OR_PRESENTATION         : 'PR',
    SPECIFICATION                 : 'SPC',
    SRM                           : 'SRM',
    TEST_SUITES                   : 'TS',
    UI_PROTOTYPE_COMPETITION      : 'P',
    WEB_DESIGN                    : 'W',
    WIDGET_OR_MOBILE_SCREEN_DESIGN: 'WI',
    WIREFRAMES                    : 'WF'
  }

  const abbreviation = subtrackAbbreviations[subtrack] || '?'

  return abbreviation
}
