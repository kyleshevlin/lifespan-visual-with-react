import React, { Fragment } from 'react'
import { WEEKS_IN_LIFE } from '../constants'
import { inflect } from '../helpers'
import Legend from './Legend'

const weeksInflection = inflect('week')('weeks')

const BirthdateForm = ({ birthdate, weeksLived, onChange }) => {
  const til90 = WEEKS_IN_LIFE - weeksLived

  return (
    <div className="birthdate-wrap">
      <div className="birthdate_form">
        <h3>Enter Your Birthdate</h3>
        <input
          className="birthdate_form-input"
          name="birthdate"
          onChange={onChange}
          placeholder="mm/dd/yyyy"
          type="text"
          value={birthdate}
        />

        <div>
          {weeksLived > 0 ? (
            <Fragment>
              <p>
                You have been alive for: {weeksLived}{' '}
                {weeksInflection(weeksLived)}
              </p>
              <p>
                {`You have ${til90} ${weeksInflection(
                  til90
                )} until you're 90 years old.`}
              </p>
            </Fragment>
          ) : null}
        </div>
      </div>
      <Legend />
    </div>
  )
}

export default BirthdateForm
