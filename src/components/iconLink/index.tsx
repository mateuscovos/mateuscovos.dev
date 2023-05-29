import { Icon } from '@chakra-ui/react'
import Link from 'next/link'
import type { IconType } from 'react-icons/lib'

interface IconLinkProps {
    icon: IconType
    href: string,
    fontSize?: string
}

export const IconLink = ({ icon, fontSize, href }: IconLinkProps) => {
    return (
        <Link href={href} target="_blank" >
            <Icon
                as={icon}
                fontSize={fontSize || '2rem'}
                verticalAlign={'middle'}
                transition="transform 0.3s"
                _hover={{ transform: 'scale(1.2)', color: 'purple.200' }}
            />
        </Link>
    )
}