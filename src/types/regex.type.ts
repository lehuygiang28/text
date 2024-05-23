export type OutputCase = 'same' | 'lower' | 'upper' | 'lowerAndUpper';

export type CreateRegexOptions = {
    /**
     * Whether the search is case sensitive or not.
     * @default false
     */
    sensitive?: boolean;

    /**
     * Set the output case of the regex.
     * @default 'same'
     */
    outputCase?: OutputCase;
};
