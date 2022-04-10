import React from 'react'
import { Avatar, AvatarBadge } from '@chakra-ui/react'

function AvatarIcon(props) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const [seed, setSeed] = React.useState(props.imgSeed ? props.imgSeed : Math.random())
    const [isOnline, setIsOnline] = React.useState(getRandomInt(2))
    const [isInvisible, setIsInvisible] = React.useState()
    const [isAway, setIsAway] = React.useState(getRandomInt(2))
    const [isBusy, setBusy] = React.useState(getRandomInt(2))

    React.useEffect( () => { 
        if(props.isUser === true){
            setIsOnline(props.isOnline)
            setIsAway(props.isAway)
            setBusy(props.isBusy)
        }
    }, [props.isOnline, props.isAway, props.isBusy])
    
    return (
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}>
                   
        </Avatar>
    )
}
// <AvatarBadge boxSize='1em' bg={(isOnline && isAway) ? 'yellow.400' : ((isOnline && isBusy) ? 'red.500' : ((isOnline && !isBusy && !isAway) ? 'green.500' : 'gray.500'))} />
export { AvatarIcon }