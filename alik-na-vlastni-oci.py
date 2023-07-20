#!/usr/bin/python3
"""Alík na vlastní oči.
Petr Šabata, 2023.  MIT/X11 License.  See LICENSE for details.

Processes simple meetup data files in the supplied data dir and
outputs a DOT graph representation of the data.
"""
import os
import sys

def write_dot(data, filename):
    with open(filename, "w") as fn:
        fn.write("graph \"Alík na vlastní oči!\" ")
        fn.write("{ concentrate=true\n")
        for person in sorted(data.keys()):
            fn.write("  \"{}\";\n".format(person))
        for person in sorted(data.keys()):
            fn.write("  \"{}\" -- {{\n".format(person))
            for edge in sorted(data[person]):
                fn.write("    \"{}\"\n".format(edge))
            fn.write("  }\n")
        fn.write("}\n")

def main():
    if len(sys.argv) != 3:
        print("Usage: <data directory> <output file>")
        sys.exit(1)
    data = dict()
    for filename in os.listdir(sys.argv[1]):
        path = os.path.join(sys.argv[1], filename)
        with open(path, "r") as fn:
            participants = fn.read().splitlines()
        for participant in participants:
            if participant not in data:
                data[participant] = set()
        for participant in participants:
            for the_other in participants:
                if participant == the_other:
                    continue
                data[participant].update((the_other, ))
                data[the_other].update((participant, ))
    write_dot(data, sys.argv[2])

if __name__ == "__main__":
    main()
