
import React from "react";
import Container from "./ui/Container";

/**
 * Section estandariza:
 * - padding vertical
 * - ancho máximo (via <Container>)
 * - cabecera (title + subtitle) opcionales
 * - ancla por id para navegar (#features, #pricing, #faq)
 */
export default function Section({
    id,
    title,
    subtitle,
    children,
    as: Tag = "section",
    className = "",
    titleClassName = "",
    subtitleClassName = "",
}) {
    return (
        <Tag id={id} className={`py-20 ${className}`}>
            <Container>
                {title && (
                    <h2 className={`text-3xl font-bold text-center ${titleClassName}`}>
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <p
                        className={`text-center text-gray-600 dark:text-neutral-400 mt-2 ${subtitleClassName}`}
                    >
                        {subtitle}
                    </p>
                )}

                <div className="mt-10">{children}</div>
            </Container>
        </Tag>
    );
}

