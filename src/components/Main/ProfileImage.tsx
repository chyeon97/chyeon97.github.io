import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const ProfileImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return (
    <ProfileImageWrapper>
      <StaticImage
        src="../../images/profile.jpg"
        alt="Profile Image"
        width={120}
        height={120}
        placeholder="blurred"
        layout="constrained"
        style={{ borderRadius: '50%' }}
      />
    </ProfileImageWrapper>
  )
}

export default ProfileImage
