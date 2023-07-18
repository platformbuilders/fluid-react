
# Typography Example usages 

### Source Code
<!-- SOURCE -->

```html
<Typography as="h1" variant="max">
  Logout
</Typography>
<Title forwardedAs="h1" variant="max">
  {title}
</Title>
<Title2>Welcome</Title2>
```

```ts
export const Title = styled(Typography)`
  color: red;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const Title2 = styled(Typography).attrs({
  variant: 'max',
  forwardedAs: 'h3',
})`
  color: green;
`;
```


<!-- PROPS -->


