import React from "react"
import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go"
const ButtonPage = () => {
  const handleClick = () => {}
  return (
    <>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          hello
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoCloudDownload />
          hello
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          hello
        </Button>
      </div>
      <div>
        <Button success outline>
          hello
        </Button>
      </div>
      <div>
        <Button danger>hello </Button>
      </div>
    </>
  )
}

export default ButtonPage
