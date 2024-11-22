## Error fixing

Don't do this:
Normal: [null, <value>]
Error: [<errorType>, <errorText>]

Do this instead:
Normal:
{
    isErr = false,
    token = <value>,
    error = undefined
}
Error:
{
    isErr = true,
    token = undefined,
    error = <err>
}

## Parser
https://en.wikipedia.org/wiki/LL_parser#Concrete_example