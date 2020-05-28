## Hello, crypt0

## <a name='TOC'>🐼 Summary</a>

* [Rules](#rules)
* [Overview](#overview)
* [Challenges](#challenges)
* [Credits](#credits)

## <a name='overview'>🦊 Rules</a>

Hi, here are some rules to carry out this story oav;

* You **MUST** create a git repository named `s3cu-crypt0`
* You **MUST** create a file called `.author` with your username followed by a newline.

```sh
~/s3cu-crypt0 ❯❯❯ cat -e .author
heisenberg$
```

> Of course, you can talk about the subject with other developers, peer-learning is
> the key to be a better developer. Don't hesitate to ask questions or help people on slack.

> Don't forget, there is no useless question :-)

* You **MUST** return the project before Friday May, 29 at 4:00 pm by sending an MP on slack with the link of your github repo.
* You **MUST** add `pu-erh` user as a collaborator.

## <a name='overview'>🐱 Overview</a>

The purpose of this challenge is simple, resolve some crypto programming challenges.
You **CAN** use any programming language you want.

## <a name='challenges'>🐨 Challenges</a>

### 01 Convert hex to base64

Filename : **`ex01.hex2base64.[ext]`**

The string:

`49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d`

Should produce:

`SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t`

So go ahead and make that happen. You'll need to use this code for the rest of the exercises.

> Always operate on raw bytes, never on encoded strings. Only use hex and base64 for pretty-printing.

### 02 Fixed XOR

Filename : **`ex02.fixedxor.[ext]`**

Write a function that takes two equal-length buffers and produces their XOR combination.

If your function works properly, then when you feed it the string:

`1c0111001f010100061a024b53535009181c`

... after hex decoding, and when XOR'd against:

`686974207468652062756c6c277320657965`

... should produce:

`746865206b696420646f6e277420706c6179`

### 03 Single-byte XOR cipher

Filename : **`ex03.singlebytexor.[ext]`**

The hex encoded string:

`1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736`

... has been XOR'd against a single character. Find the key, decrypt the message.

You can do this by hand. But don't write code to do it for you.

How? Devise some method for "scoring" a piece of English plaintext. Character frequency is a good metric. Evaluate each output and choose the one with the best score.

> You now have our permission to make ["ETAOIN SHRDLU"](https://en.wikipedia.org/wiki/Etaoin_shrdlu) jokes.

### 04 Detect single-character XOR

Filename : **`ex04.xordetect.[ext]`**

One of the 60-character strings in this [file](data/h014.txt) has been encrypted by single-character XOR.

Find it.

> Your code from the previous exercise should help.

### 05 Implement repeating-key XOR

Filename : **`ex05.reapeatxor.[ext]`**

Here is the opening stanza of an important work of the English language:

`Burning 'em, if you ain't quick and nimble
I go crazy when I hear a cymbal`

Encrypt it, under the key "ICE", using repeating-key XOR.

In repeating-key XOR, you'll sequentially apply each byte of the key; the first byte of plaintext will be XOR'd against I, the next C, the next E, then I again for the 4th byte, and so on.

It should come out to:

`0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272
a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f`

Encrypt a bunch of stuff using your repeating-key XOR function.<br />
Encrypt your mail. Encrypt your password file. Your .sig file. Get a feel for it. 

>You aren't wasting your time with this.

### 06 Implement your beloved algorithm

Filename : **`ex05.challengeaccepted.[ext]`**

As you saw last days, there are plenty of algorithms :)
Well, you have to choose a crypto algorithm and implement it.

> You are entirely free to choose and the complexity of the algo

## <a name='credits'>🐵 Credits</a>

Craft with :heart: in **Paris**.
