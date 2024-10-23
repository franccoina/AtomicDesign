"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkComponent = styled(Link)`
  text-decoration: none;
  padding: 15px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: 400;
  transition: 0.4s;

  &:hover {
    font-weight: 700;
    transition: 0.4s;
  }
`;

interface ILinkProps {
    key?: string;
    href: string;
    label: string;
    target?: '_blank' | '_self';
    onClick?: () => void;
    children?: React.ReactNode;
}

const StyledLink: React.FC<ILinkProps> = ({key, href, target, label, onClick, children }) => {


    return (
        <LinkComponent
            key={key}
            href={href}
            onClick={onClick}
            target={target}
        >
            {children || label} {/* Si `children` existe, lo renderiza, de lo contrario usa `label` */}
        </LinkComponent>
    );
};

export default StyledLink;
