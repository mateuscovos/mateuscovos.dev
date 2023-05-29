import { Flex, HStack, Spacer, Icon, useColorMode } from '@chakra-ui/react'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

import { IconLink } from '../iconLink'
import { useTranslation } from 'react-i18next'
import { Gb, Pt } from 'react-flags-select'
import { useRouter } from 'next/router'

import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useEffect, useState } from 'react'


export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const [color, setColor] = useState('white.800')

    useEffect(() => {
        setColor(colorMode !== 'light' ? 'white.800' : 'gray.800')
        return () => {}
    }, [colorMode])


    const { i18n } = useTranslation()
    const router = useRouter()

    const handleChangeLanguage = (language: 'ptbr' | 'en') => {
        i18n.changeLanguage(language)
        router.push(router.pathname, router.asPath, { locale: language })
    }

    return (
        <Flex
            as='header'
            color={color}
            minWidth='max-content'
            gap='5'
            p={'6'}
        >
            <HStack>
                <Icon as={Pt} onClick={() => handleChangeLanguage('ptbr')} cursor='pointer' />
                <Icon as={Gb} onClick={() => handleChangeLanguage('en')} cursor='pointer' />
                <Icon color={color} as={colorMode === 'light' ? MdDarkMode : MdLightMode} onClick={toggleColorMode} cursor='pointer' />
            </HStack>


            <Spacer />
            <HStack>
                <IconLink fontSize='2xl' icon={RiLinkedinBoxFill} href={'https://linkedin.com/in/mateuscovos'} />
                <IconLink fontSize='2xl' icon={RiGithubFill} href={'https://github.com/mateuscovos'} />
            </HStack>
        </Flex >
    )
}
